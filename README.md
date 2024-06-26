# cat-dictionary

![Npm](https://img.shields.io/badge/npm-10.7.0-orange?style=flat-square)
![Node.js](https://img.shields.io/badge/node.js-20.14.0-blue?style=flat-square)

리액트(React)는 Facebook(현재 Meta)에서 만든 자뱌스크립트 라이브러리로 사용자 인터페이스를 만들기 위해 사용됩니다. 리액트는 현재 가장 인기 있는 자바스크립트 라이브러리가 되었으며 수백만 개 이상의 웹 사이트에서 다양한 목적으로 사용되고 있습니다. 하지만 리액트에는 한 가지 큰 문제점이 있습니다. 바로 리액트가 클라이언트 사이드 렌더링(Client-Side-Rendering, CSR) 방식을 사용한다는 점입니다. 사용자의 웹 브라우저에서만 실행되기 때문에 리액트를 사용한 웹 애플리케이션은 검색 엔진 최적화(Search-Engine-Optimization, SEO)의 효과를 거의 볼 수 없으며, 첫 화면에 웹 애플리케이션을 제대로 표시하기 위해 애플리케이션 실행 초기에 성능 부담이 생깁니다. 브라우저가 전체 웹 애플리케이션 번들을 다운로드한 다음 그 내용을 분석하고 코드를 실행해서 결과를 얻어야 하기 때문입니다. 이 문제를 해결하기 위해 서버에서 미리 렌더링해두는 방법을 연구하기 시작했고 이러한 연구의 결과로 Vercel이 Next.js를 만들었습니다.
<br />
Next.js는 React를 위해 만든 오픈소스 자바스크립트 웹 프레임워크로, 기본적으로 서버 사이드 렌더링을 지원하여 초기 HTML을 서버에서 생성해 클라이언트로 보내기 때문에 SEO 및 초기 로딩 속도 문제를 해결합니다. 그리고 코드 분할, 파일 기반 라우팅, 경로 기반 프리페칭 등 많은 기능을 제공합니다. 이처럼 리액트의 단점을 보완하는 많은 기능들을 가진 Next.js의 기본적인 사용법을 익히기 위해 해당 프로젝트를 진행하였습니다.
<br />
Tailwind CSS는 Utility-First를 지향하는 CSS 프레임워크입니다. 여기서 Utility-First란 미리 세팅된 유틸리티 클래스를 활용하여 HTML 코드 내에서 스타일링하는 것을 뜻합니다. Tailwind CSS는 유틸리티 클래스, 미리 정의된 스타일, 손쉬운 반응형 적용, 우수한 성능 등 좋은 장점이 많은 CSS 프레임워크로 Next.js 설치 시 함께 설치하기를 권유할 만큼 Next.js에서 자주 쓰이기 때문에 Tailwind CSS의 기본적인 사용법을 학습하기 위하여 해당 프로젝트에 적용시켰습니다.

### Built With

- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=ffffff)
- ![Styled-Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=ffffff)

<br />

## Getting Started
1. Clone the repo
   ```
   git clone https://github.com/byeongminn/cat-dictionary.git
   ```
2. Install NPM packages
   ```
   npm install
   ```
3. Start the project
   ```
   npm run start
   ```

<br />

## Usage
### [고양이 목록]
- 고양이 목록이 표출됩니다.
- 고양이 클릭 시 상세 페이지로 이동합니다.

|Desktop|Mobile|
|--------|--------|
|<img width="500" alt="cats" src="https://github.com/byeongminn/cat-dictionary/assets/74594510/a6e5ab8b-c144-40a4-97d9-b2d70d830a82">|<img width="300" alt="cats" src="https://github.com/byeongminn/cat-dictionary/assets/74594510/7eb608d7-b8ac-44d7-a367-1b63d6a3aa02">|

<br />

### [고양이 상세]
- 고양이 상세 정보가 표출됩니다.

|Desktop|Mobile|
|--------|--------|
|<img width="500" alt="cat" src="https://github.com/byeongminn/cat-dictionary/assets/74594510/925e5027-8f2b-4369-856f-5e91ecf8655b">|<img width="300" alt="cat" src="https://github.com/byeongminn/cat-dictionary/assets/74594510/743083bc-b13d-4b65-acf2-ea9e28e93ad6">|

<br />
