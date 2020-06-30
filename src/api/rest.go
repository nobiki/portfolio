package main

import (
	"fmt"

	"github.com/gin-gonic/gin"

	"github.com/jinzhu/gorm"
	// "github.com/bdwilliams/go-jsonify/jsonify"
	_ "github.com/lib/pq"
)

type Experience struct {
	Id          int
	Year        int
	Description string
	Text        string
}

var experiences []Experience

func main() {
	r := gin.Default()

	r.POST("/send-contact", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE")

		name := c.PostForm("name")
		email := c.PostForm("email")
		subject := c.PostForm("subject")
		message := c.PostForm("message")

		c.JSON(200, gin.H{
			"status":  "posted",
			"name": name,
			"email": email,
			"subject": subject,
			"message": message,
		})
	})

	r.GET("/get-experiences", func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE")

		db, err := gorm.Open("postgres", "host=postgres user=user password=pass dbname=portfolio sslmode=disable")
		if err != nil {
			panic(err)
		}
		defer db.Close()

		rows := db.Find(&experiences)
		if err != nil {
			panic(err)
		}
		defer rows.Close()

		output := rows
		fmt.Println(output)

		c.JSON(200, output)
	})

	r.Run(":3001")
}
