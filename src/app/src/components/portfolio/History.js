import React, { Component } from "react";

class History extends Component {

  render() {
    return (
      <section className="py-5 white lighten-4" id="history">
        <div className="container mt-5 mb-5">
          <div className="text-center wow fadeIn">
            <h2 className="h1 pt-5 pb-3">History</h2>
            <p className="px-5 mb-5 pb-3 lead blue-grey-text">
            </p>
          </div>
          <div className="row">
            <div className="col-md-9 offset-md-1">
              <h4>2000</h4>
              <ul className="timeline">
                <li className="academy">
                  <p className="blue-text">
                    プログラムとの出会い
                    <font className="float-right">2000.04</font>
                  </p>
                  <p>
                  高校当時読んだゲーム制作の本に書かれていた、「ゲームプログラムをするならC言語をはじめよう」という岡本吉起氏のメッセージを見て、C言語を始めました。はじめてのプログラミング入門書は、結城浩さんの<a href="https://amzn.to/3dyJa51" target="_blank">C言語プログラミングレッスン</a>でした
                  </p>
                </li>
                <li className="academy">
                  <p className="blue-text">
                    ゲームプログラミングをはじめる
                    <font className="float-right">2001.04</font>
                  </p>
                  <p>
                  その後、C++とJavaでゲームプログラムをはじめました。ゲームボーイアドバンスと、プレイステーションの簡単なゲームを作りました
                  </p>
                </li>
              </ul>
              <h4>2005</h4>
              <ul className="timeline">
                <li>
                  <p className="blue-text">
                    ネットワークエンジニアになる
                    <font className="float-right">
                      <i className="fa lg-1 lg-mysql"></i>
                      <i className="fa lg-1 lg-php"></i>
                      2005.04
                    </font>
                  </p>
                  <p>
                  大手のSESに就職し、社会に出てから2年ほど、ネットワークエンジニアをしていました。当時はISDNが主流で、ADSLへのリプレイスをしたり、IT資産全般の管理を行っていました。また、この頃からWebに興味を持ち始め、空き時間にPHPで社内システムを作ったりしていました
                  </p>
                </li>
              </ul>
              <h4>2006</h4>
              <ul className="timeline">
                <li>
                  <p className="blue-text">
                    Webの世界へ
                    <font className="float-right">
                      <i className="fa lg-1 lg-debian"></i>
                      <i className="fa lg-1 lg-mysql"></i>
                      <i className="fa lg-1 lg-php"></i>
                      2006.10
                    </font>
                  </p>
                  <p>
                  Web開発がしたくて、主にガラケーWebサイトの受託開発をしている企業に転職をしました。この頃から、趣味でDebianの自宅サーバの運用をし始め、ゼロベースでLAMP構成のシステムを構築するスキルを身につけました
                  </p>
                </li>
                <li>
                  <p className="blue-text">
                    モバイルポータルサイトCMS開発
                    <font className="float-right">
                      <i className="fa lg-1 lg-centos"></i>
                      <i className="fa lg-1 lg-postgres"></i>
                      <i className="fa lg-1 lg-php"></i>
                      2007.09
                    </font>
                  </p>
                  <p>
                  某大手3キャリアの、モバイル公式サイトのプロジェクトに参画しました。管理画面側をまるっと担当しました
                  </p>
                </li>
                <li>
                  <p className="blue-text">
                    プロジェクトマネージャになる
                    <font className="float-right">
                      <i className="fa lg-1 lg-centos"></i>
                      <i className="fa lg-1 lg-mysql"></i>
                      <i className="fa lg-1 lg-php"></i>
                      2007.12
                    </font>
                  </p>
                  <p>
                  某航空会社のモバイル公式サイトリニューアルプロジェクトで、はじめてプロジェクトマネージャになりました
                  </p>
                </li>
                <li>
                  <p className="blue-text">
                    某小売業のECサイト開発保守
                    <font className="float-right">
                      <i className="fa lg-1 lg-centos"></i>
                      <i className="fa lg-1 lg-sqlserver"></i>
                      <i className="fa lg-1 lg-postgres"></i>
                      <i className="fa lg-1 lg-php"></i>
                      2008.04
                    </font>
                  </p>
                  <p>
                  この頃もプロジェクトマネージャをしていました。元請けの大手SIさんの品質管理技術に関心を持ち、後に、<a href="https://www.juse.jp/jcsqe/" target="_blank">JCSQE</a>を取得するきっかけになりました
                  </p>
                </li>
              </ul>
              <h4>2010</h4>
              <ul className="timeline">
                <li>
                  <p className="blue-text">
                    コミュニティサイト開発保守
                    <font className="float-right">
                      <i className="fa lg-1 lg-fluentd"></i>
                      <i className="fa lg-1 lg-mongo"></i>
                      <i className="fa lg-1 lg-centos"></i>
                      <i className="fa lg-1 lg-mysql"></i>
                      <i className="fa lg-1 lg-php"></i>
                      2010.08
                    </font>
                  </p>
                  <p>
                  月2億PVほどある、老舗の自社サービスサイトを担当しました。Fluentdでのアクセスログ収集や、MySQLレプリケーション、SQL正規化、インデックス設計、パフォーマンスチューニングなど、アクセスの多いサイトの取扱いを色濃く学んだプロジェクトでした
                  </p>
                </li>
              </ul>
              <h4>2012</h4>
              <ul className="timeline">
                <li>
                  <p className="blue-text">
                    サービス業向けWebサイト開発保守
                    <font className="float-right">
                      <i className="fa lg-1 lg-jquery"></i>
                      <i className="fa lg-1 lg-codeigniter"></i>
                      <i className="fa lg-1 lg-fuelphp"></i>
                      <i className="fa lg-1 lg-cakephp"></i>
                      <i className="fa lg-1 lg-centos"></i>
                      <i className="fa lg-1 lg-mysql"></i>
                      <i className="fa lg-1 lg-php"></i>
                      2012.06
                    </font>
                  </p>
                  <p>
                  この頃、一度自社サービスからは離れ、CakePHP, FuelPHP, Codeignitorなど、LAMP構成のWebサイトを、だいたい3～6ヶ月くらいのスパンでひたすら受託開発をしていました
                  </p>
                </li>
                <li>
                  <p className="blue-text">
                    コミュニティサイトCMS新規開発
                    <font className="float-right">
                      <i className="fa lg-1 lg-backbone"></i>
                      <i className="fa lg-1 lg-jquery"></i>
                      <i className="fa lg-1 lg-jenkins"></i>
                      <i className="fa lg-1 lg-docker"></i>
                      <i className="fa lg-1 lg-gcp"></i>
                      <i className="fa lg-1 lg-centos"></i>
                      <i className="fa lg-1 lg-mysql"></i>
                      <i className="fa lg-1 lg-php"></i>
                      2014.04
                    </font>
                  </p>
                  <p>
                  コミュニティサイトCMSの開発プロジェクトで、アプリケーションのアーキテクチャ設計から担当し、CI/CDを意識したシステムを構築しました。この頃からインフラもクラウドへ移行し、GCPでインフラ設計＆構築を行いました
                  </p>
                </li>
                <li>
                  <p className="blue-text">
                    ソフトウェア品質技術者初級取得
                    <font className="float-right">
                      <i className="fa lg-1 lg-jcsqe"></i>
                      2014.11
                    </font>
                  </p>
                  <p>
                  個人的に関心の高かったソフトウェア品質の資格、<a href="https://www.juse.jp/jcsqe/" target="_blank">JCSQE</a>を取得しました
                  </p>
                </li>
              </ul>
              <h4>2017</h4>
              <ul className="timeline">
                <li className="free">
                  <p className="blue-text">
                    フリーランスエンジニアになる
                    <font className="float-right">
                      2017.03
                    </font>
                  </p>
                  <p>
                  フリーランスエンジニアとして活動を開始しました
                  </p>
                </li>
                <li className="free">
                  <p className="blue-text">
                    宅配弁当のWebシステム開発保守
                    <font className="float-right">
                      <i className="fa lg-1 lg-aws-2"></i>
                      <i className="fa lg-1 lg-fuelphp"></i>
                      <i className="fa lg-1 lg-mysql"></i>
                      <i className="fa lg-1 lg-php"></i>
                      2017.04
                    </font>
                  </p>
                  <p>
                  宅配弁当を取り扱うWebシステムの開発や保守を行いました
                  </p>
                </li>
                <li className="free">
                  <p className="blue-text">
                    某ビッグデータ解析ツールのパフォーマンス改善
                    <font className="float-right">
                      <i className="fa lg-1 lg-jenkins"></i>
                      <i className="fa lg-1 lg-docker"></i>
                      <i className="fa lg-1 lg-redis"></i>
                      <i className="fa lg-1 lg-php"></i>
                      2017.10
                    </font>
                  </p>
                  <p>
                  巨大なTSVファイルに記録された某ビッグデータのレコード解析をするツールの速度改善と自動化を行いました
                  </p>
                </li>
                <li className="free">
                  <p className="blue-text">
                    某ビッグデータのベンチマーク計測
                    <font className="float-right">
                      <i className="fa lg-1 lg-drill"></i>
                      <i className="fa lg-1 lg-hadoop"></i>
                      2018.01
                    </font>
                  </p>
                  <p>
                  Hadoopデータ領域に数10億レコードある某ビッグデータに対して、レコード解析を行うクエリのベンチマークを行いました。クエリエンジンにはApache Drillを使用し、Hadoopの環境構築も一部ヘルプとして入りました(インフラはニフクラ)
                  </p>
                </li>
                <li className="free">
                  <p className="blue-text">
                    某金融系ワークフローシステムの開発
                    <font className="float-right">
                      <i className="fa lg-1 lg-gcp"></i>
                      <i className="fa lg-1 lg-django"></i>
                      <i className="fa lg-1 lg-python-2"></i>
                      2018.04
                    </font>
                  </p>
                  <p>
                  某金融系ワークフローシステムの開発(Django)に参画しました
                  </p>
                </li>
                <li className="free">
                  <p className="blue-text">
                    不動産企業向けシステム開発
                    <font className="float-right">
                      <i className="fa lg-1 lg-aws-2"></i>
                      <i className="fa lg-1 lg-docker"></i>
                      <i className="fa lg-1 lg-selenium"></i>
                      <i className="fa lg-1 lg-vue"></i>
                      <i className="fa lg-1 lg-rails"></i>
                      <i className="fa lg-1 lg-ruby"></i>
                      2019.02
                    </font>
                  </p>
                  <p>
                  不動産企業向けのCMSの開発や、リノベーション営業サイトのリニュアル、民泊サイトの新規構築等をで行いました。(Rails,Vue) また、E2Eテストの自動化や、Webサイトのスクレイピング等も担当しました。(Selenium,Robotframework)
                  </p>
                </li>
                <li className="free">
                  <p className="blue-text">
                    某ファイル配信サービスの新規開発
                    <font className="float-right">
                      <i className="fa lg-1 lg-aws-2"></i>
                      <i className="fa lg-1 lg-jmeter"></i>
                      2019.06
                    </font>
                  </p>
                  <p>
                  某PWAサイトの新規開発にjoinし、主にコードレビューとデプロイ(CodeBuild,Jenkins)、および、負荷試験(Jmeter)の部分を担当しました
                  </p>
                </li>
                <li className="free">
                  <p className="blue-text">
                    某インサイドセールスシステム開発保守
                    <font className="float-right">
                      <i className="fa lg-1 lg-aws-2"></i>
                      <i className="fa lg-1 lg-docker"></i>
                      <i className="fa lg-1 lg-selenium"></i>
                      <i className="fa lg-1 lg-python-2"></i>
                      <i className="fa lg-1 lg-mysql"></i>
                      <i className="fa lg-1 lg-php"></i>
                      現在
                    </font>
                  </p>
                  <p>
                  某インサイドセールスシステムの開発にjoinし、保守・E2Eテスト自動化・インフラ構築(AWS)・CI/CDなど、主にSRE関係を担当しています
                  </p>
                </li>
              </ul>
            <small><a href="https://skillsheet.nobiki.com" target="_blank" title="スキルシート"><i className="fa fa-lock gray-text"></i>&nbsp;&nbsp;Skill Sheet</a></small>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default History;
