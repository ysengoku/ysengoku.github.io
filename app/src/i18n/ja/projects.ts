export const projectsJa = {
  portfolio: {
    subtitle: 'プロジェクトとスキルを紹介するポートフォリオサイト',
    intro:
      '技術スキル、プロジェクト、職務経験を、シンプルで分かりやすいインターフェースで紹介するシングルページサイト',
    description:
      'レスポンシブ対応の UI と多言語対応(英語、フランス語、日本語)を備え、各プロジェクトの概要を閲覧できます。Vue.js と TypeScript を用いたフロントエンド構成で、Pinia による状態管理と言語切り替えを実装し、GitHub Pages にデプロイしています。',
  },
  transcendence: {
    subtitle: 'ポンゲームとライブチャットを備えたソーシャルゲームプラットフォーム',
    intro:
      '42 のカリキュラムの一環として、5 人チームで開発したリアルタイム対応のソーシャルゲームプラットフォーム(シングルページアプリケーション)',
    description:
      'JWT/OAuth 認証、ユーザープロファイル、ゲーム統計、マッチメイキング、トーナメント、マルチプレイヤー機能を実装しています。Pongは3D描画に対応し、ローカルおよびオンラインの両モードをサポートします。UIはレスポンシブ対応で、ダーク/ライトモードを備えています。',
  },
  cub3d: {
    subtitle: 'Wolfenstein 3D風ミニゲーム',
    intro: '2人チームで開発した、レイキャスティングによる3D表現のゲーム',
    description:
      '2D空間上で3D表現を行うレイキャスティングを用い、MinilibX(42独自のグラフィックスライブラリ)で描画処理を実装しました。キーボード・マウス操作やドアアニメーションなどのインタラクションを備えています。',
  },
  camagru: {
    subtitle: 'フレームワークを使わず開発した、Webカメラで撮影・編集できる写真共有Webアプリ',
    intro: '自作のMVCアーキテクチャとネイティブSQLで開発した写真共有Webアプリ',
    description:
      'Webカメラで撮影、または画像をアップロードし、スタンプ・テキスト・フィルターを重ねて公開ギャラリーに投稿できます。最終的な画像はサーバー側で合成しています。メール認証とパスワード再設定を含むアカウント管理、出力のエスケープとプリペアドステートメントによるXSS・SQLインジェクション対策、PHPDocからのAPIドキュメント自動生成も実装しました。',
  },
  dockerInfra: {
    subtitle: 'TerraformとAnsibleでクラウドにデプロイするDockerマルチサービス構成',
    intro: 'Dockerによるコンテナ環境の構築と、クラウドへの自動デプロイ',
    description:
      'Inceptionでは、WordPress・MariaDB・NGINXをそれぞれゼロからコンテナ化し、Docker Composeで連携させました。Cloud-1ではこれを発展させ、TerraformでAWSインスタンスを用意し、Ansibleのプレイブックで、まっさらなUbuntuサーバーからWordPressサイトの稼働までを1コマンドで行います。デプロイは冪等で再起動後も動作し、秘密情報はAnsible Vaultで管理しています。外部に公開するのはSSH・HTTP・HTTPSのみで、TLSにも対応しています。',
  },
  irc: {
    subtitle: 'IRCベースのチャットサーバーとインタラクティブボット',
    intro: 'IRCプロトコルを題材に、3人チームで開発した42のプロジェクト',
    description:
      'RFC1459 を参考にしたIRCサーバーを実装し、プライベートメッセージ、チャンネル管理、ユーザー認証に対応しています。さらにコマンド処理用のBotを実装し、外部API と連携した動的な応答を実現しました。',
  },
  android: {
    subtitle: 'Kotlinで開発した2つのAndroidアプリ : 連絡先・SMS管理と42プロフィール検索',
    intro: '異なるアプローチで開発した、Kotlinによる2つのAndroidアプリ',
    description:
      'ft_hangoutsは、連絡先の管理とSMSのやり取りができるアプリで、データはローカルのSQLiteに保存します。外部ライブラリを使わずAndroid SDKだけで開発し、アクティビティのライフサイクル、システムブロードキャスト、実行時パーミッション、インテントを直接扱いました。Swifty Companionは、42 Intra APIで42の学生を検索し、プロフィール、レベル、プロジェクト、スキルを表示します。UIはJetpack Composeで構築し、トークンの更新を含むOAuth2認証を自動で処理しています。',
  },
  ios: {
    subtitle:
      'Apple Foundation ProgramとExtended Programで開発した、SwiftUIによる2つのiOSアプリプロトタイプ',
    intro:
      'Apple Foundation Programにてチームで開発。Mobilixは4人チーム、HarmonyはExtended Programにて5人のフルリモートチームで開発しました。',
    description:
      '最初のプロトタイプMobilixは、ソフトモビリティの促進を目的としたアプリで、提携交通サービスの利用でポイントがたまり、近くの利用可能な手段をマップで探して予約できます。MVVMモデルで構築したHarmonyは、慣れない環境での安全なコミュニケーションと異文化交流を目的とし、ニュースフィード、文化別コミュニティ、文化イベント、チャット、プロフィールに加え、文化を学べるオンラインクイズを備えています。',
  },
  minishell: {
    subtitle: 'C言語によるShell実装',
    intro: '42における最初の2人チームプロジェクトとして開発したShell',
    description:
      'リダイレクト、パイプ、シグナル処理、環境変数展開、基本的なbuilt-inコマンドを実装しました。メモリリークやセグメンテーションフォルトを起こさない安定性を重視しています。',
  },
  inception: {
    subtitle: 'Dockerを用いたマルチサービスインフラストラクチャー',
    intro: '42における個人プロジェクトとして、安全で拡張性のあるインフラ構築を目的に開発しました。',
    description:
      'Dockerと Docker Composeを用いて、Webサーバーやデータベースを含むマルチサービス構成を設計しました。軽量かつ実運用を意識したインフラ設計を重視しています。',
  },
  harmony: {
    subtitle: 'VMMVモデルを用いたiOSアプリプロトタイプ',
    intro:
      'Apple Foundation Extended Programにて、5人のフルリモートチームで開発したiOSアプリのプロトタイプ',
    description:
      '異文化交流と安全なコミュニケーションを目的としたアプリで、ニュースフィード、文化別コミュニティ、イベント、チャット、プロフィールの5つの主要ビューを実装しました。加えて、文化理解を促すオンラインクイズも開発しました。',
  },
  mobilix: {
    subtitle: 'iOSアプリプロトタイプ',
    intro: 'Apple Foundation Programにて開発した、初のiOSアプリプロトタイプ',
    description:
      '4人チームで開発し、ソフトモビリティ促進を目的としています。提携交通サービスの利用によるポイント獲得システムや、近隣の利用可能手段を表示・予約できるマップ機能を実装しました。',
  },
};
