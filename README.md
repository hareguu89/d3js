# D3.js (data driven documents)
D3.js는 데이터 기반으로 문서수정을 하기 위한 Javascript 라이브러리다. D3.js는 HTML, SVG, CSS를 사용해서 데이터에 활기를 부어준다. 웹 표준상에서 D3의 주안점은 개발자가 강력한 비주얼라이제이션 컴포넌트들을 결합한 자체 프로임워크로 작업하지 않아도 최신 브라우저의 호환성을 보장하는 것이다. 그리고 DOM 수정에 대해서 데이터 관점에서 접근한다.

<a href="https://d3js.org/" >d3.js link</a>
- 데이터를 시각화 하려는 목적
- SVG를 통해 다양한 해상도에서 깨짐없는 시각화 가능.

#### 동작과정
1. Loading - 데이터로딩
2. Selecting-binding - 코드 연동
3. Transform - 그래프의 색상, 축 등 설정
4. Transition - 클릭 등의 효과 지정

#### 기본 메서드

<strong>Selections</strong>
d3.select - 현재 문서에서 문서요소 하나를 선택한다.
d3.selectAll - 현재 문서에서 문서요소 여러개를 선택한다.
selection.attr - 속성값을 지정하거나 가져온다.
selection.classed - CSS 클래스를 추가하거나 제거한다.
selection.style - CSS 스타일 프로퍼티를 지정하거나 가져온다.
selection.property - 프로퍼티의 원래 값을 지정하거나 가져온다.
selection.text - 텍스트 컨텐츠를 지정하거나 가져온다.
selection.html - HTML 컨텐츠를 지정하거나 가져온다.
selection.append - 새로운 문서요소를 생성하고 추가한다.
selection.insert - 존재하는 문서요소 앞에 새로운 문서요소를 생성하고 추가한다.
selection.remove - 문서에서 문서요소를 제거한다.
selection.data - 참조 연결 계산을 통해 데이터를 문서요소 그룹을 위해 지정하거나 가져온다.
selection.enter - 부족한 문서요소를 위한 플레이스홀더를 반환한다.
selection.exit - 더 이상 필요없는 문서요소를 반환한다.
selection.filter - 데이터 기반으로 선택물을 필터링한다.
selection.datum - 결합 연산없이 개별 문서요소에 대한 데이터를 지정하거나 가져온다.
selection.sort - 데이터 기반으로 문서의 문서요소를 정렬한다.
selection.order - 선택물과 일치하기 위해서 문서에 문서요소를 랜더링한다.
selection.on - 인터렉션을 위한 이벤트 리스너를 추가하거나 제거한다.
selection.transition - 선택한 문서요소에서 변환(transition)을 시작한다.
selection.each - 선택한 문서요소 별로 함수를 호출한다.
selection.call - 해당 선택물에서 함수를 호출한다.
selection.empty - 선택물이 비어있으면 true를 반환한다.
selection.node - 선택물의 첫번째 노드에 접근한다.
selection.select - 선택한 문서요소 별로 자손 문서요소 하나씩을 하위선택물로 선택한다.
selection.selectAll - 선택한 문서요소 별로 여러개의 자손문서요소를 하위선택물로 선택한다.
d3.selection - 선택물의 prototype를 추가하거나 인스턴스 타입를 체크한다.
d3.event - 인터렉션을 위한 해당 사용자 이벤트에 접근한다.
d3.mouse - 지정한 컨테이너 기준의 마우스 좌표를 반환한다.
d3.touches - 지정한 컨테이너 기준으로 터치 좌표를 반환한다.

<strong>Transitions</strong>
d3.transition - 애니메이션된 트랜지션을 시작한다.
transition.delay - 문서요소당 지연시간(밀리초)를 지정한다.
transition.duration - 문서요소당 지속시간(밀리초)를 지정한다.
transition.ease - 트랜지션에 이징함수를 지정한다.
transition.attr - 새로운 속성 값으로 부드럽게 트랜지션한다.
transition.attrTween - 두 속성값 사이를 부드럽게 트랜지션 한다.
transition.style - 새로운 CSS 스타일 프로퍼티 값으로 부드럽게 트랜지션한다.
transition.styleTween - 두개의 CSS 프로퍼티 값 사이를 부드럽게 트랜지션한다.
transition.text - 트랜지션이 시작할 때, 텍스트 컨텐츠를 지정한다.
transition.tween - 트랜지션의 한 부분으로 실행하기 위한 사용자 지정 tween 연산자를 지정한다.
transition.select - 선택물의 각 문서요소의 자손 요소에서 트랜지션을 시작한다.
transition.selectAll - 선택물의 각 문서요소의 자손요소들에서 트랜지션을 시작한다.
transition.filter - 데이터를 기준으로 트랜지션을 필터링한다.
transition.transition - 동일 문서요소에서 다른 트랜지션을 시작한다.
transition.remove - 트랜지션 종료시점에 선택된 문서요소를 제거한다.
transition.each - 트랜지션 end 이벤트의 리스너를 추가한다.
transition.call - 전달된 함수를 해당 트랜지션에서 호출한다.
d3.tween - 트랜지션의 보간작업(interpolation)을 수정한다.
d3.ease - 트랜지션의 타이밍을 수정한다.
ease - 파마미터 이징 함수.
d3.timer - 사용자 정의 애니메이션 타이머를 시작한다.
d3.timer.flush - 타이머를 지연없이 바로 실행한다.
d3.interpolate - 두 값사이를 보간한다.
interpolate - 파라미터 포간 작업 함수
d3.interpolateNumber - 두 숫자 사이를 보간한다.
d3.interpolateRound - 두 정수 사이를 보간한다.
d3.interpolateString - 두 문자열 사이를 보간한다.
d3.interpolateRgb - 두 RGB 색상 사이를 보간한다.
d3.interpolateHsl - 두 HSL 색상 사이를 보간한다.
d3.interpolateLab - 두 L*a*b* 색상 사이를 보간한다.
d3.interpolateHcl - 두 HCL 색상 사이를 보간한다.
d3.interpolateArray - 두 배열 사이를 보간한다.
d3.interpolateObject - 두 객체의 속성을 보간한다.
d3.interpolateTransform - 두 개의 2D 행렬 변환를 보간한다.
d3.interpolators - 사용자 정의 인터폴레이터를 등록한다.

<strong>Working with Arrays</strong>
d3.ascending - 정렬을 위해 두 값을 비교한다.
d3.descending - 정렬을 위해 두 값을 비교한다.
d3.min - 배열에서 최소값을 찾는다.
d3.max - 배열에서 최대값을 찾는다.
d3.extent - 배열체서 최대, 최소값을 찾는다.
d3.sum - 숫자 배열의 합을 계산한다.
d3.mean - 숫자 배열의 산술 평균을 계산한다.
d3.median - 숫자 배열의 중간값을 계산한다. (0.5-quantile).
d3.quantile - 정렬된 숫자 배열에서 quantile를 계산한다.
d3.bisect - 정렬된 배열에서 값을 검색한다.
d3.bisectRight - 정렬된 배열에서 값을 검색한다.
d3.bisectLeft - 정렬된 배열에서 값을 검색한다.
d3.bisector - 접근자에서 사용하는 이등분 객체
d3.shuffle - 배열의 순서를 랜덤하게 만든다.
d3.permute - 색인 배열을 통해서 원소 배열을 재 정렬한다.
d3.zip - 배열들의 가변수를 변환한다.
d3.transpose - 배열의 배열을 변환한다.
d3.keys - 연관배열의 key를 나열한다.
d3.values - 연관배열의 값을 나열한다.
d3.entries - 연관배열의 key-value 항목을 나열한다.
d3.split - 배열을 여러개로 분할한다.
d3.merge - 여러 배열을 하나로 합친다.
d3.range - 숫자형 값의 범위를 생성한다.
d3.nest - 배열 원소를 계층구조로 그룹짓는다.
nest.key - 중첩 계층구조 단계를 추가 더한다.
nest.sortKeys - key로 해당 중첩 단계를 정렬한다.
nest.sortValues - 값으로 리프(leaf) 중첩 단계를 정렬한다.
nest.rollup - 리프 값을 위한 rollup 함수를 지정한다.
nest.map - nest 연산자를 평가해서 연관배열을 반환한다.
nest.entries - nest 연산자를 평가해서 정리된 key-values 배열을 반환한다.

<strong>Math</strong>
d3.random.normal - 정규분포의 난수 생성
d3.transform - 2D 행렬 변환의 표준 형태를 연산한다.

<strong>Loading External Resources</strong>
d3.xhr - XMLHttpRequest를 이용해서 리소스를 요청한다.
d3.text - 텍스트 파일을 요청한다.
d3.json - JSON blob을 요청한다.
d3.html - HTML 문서 조각을 요청한다.
d3.xml - XML 문서 조각을 요청한다.
d3.csv - 콤마로 값을 구분하는(CSV) 파일을 요청한다.
d3.tsv - 탭으로 값을 구분하는(TSV) 파일을 요청한다.


<strong>String Formatting</strong>
d3.format - 숫자를 문자열로 포맷팅한다.
d3.requote - 정규식에서 사용할 문자열을 전달한다.
d3.round - 소수점 이하 특정 자리수에서 값을 반올림한다.


<strong>CSV Formatting (d3.csv)</strong>
d3.csv - 콤마로 구분된 값(CSV) 파일을 요청한다.
d3.csv.parse - 해더를 사용한 객체로 CSV 문자열을 파싱한다.
d3.csv.parseRows - 해더가 없는 CSV 문자열을 배열로 파싱한다.
d3.csv.format - 원소 배열을 CSV 문자열로 포매팅한다.
d3.tsv - 탭으로 구분한 값(TSV) 파일을 요청한다.
d3.tsv.parse - 해더를 사용한 객체로 TSV 문자열을 파싱한다.
d3.tsv.parseRows - 해더가 없는 TSV 문자열을 배열로 파싱한다.
d3.tsv.format - 원소 배열을 TSV 문자열로 포매팅한다.


<strong>Colors</strong>
d3.rgb - RGB 색공간의 색상을 지정한다.
rgb.brighter - 지수 인자(gamma)로 RGB 채널값을 늘린다.
rgb.darker - 지수 인자(gamma)로 RGB 채널값을 줄인다.
rgb.hsl - RGB를 HSL로 변환한다.
rgb.toString - RGB 색상을 문자열로 변환한다.
d3.hsl - HSL 색공간의 색상을 지정한다.
hsl.brighter - 지수 인자(gamma)로 명도를 늘린다.
hsl.darker - 지수 인자(gamma)로 명도를 줄인다.
hsl.rgb - HSL를 RGB로 변환한다.
hsl.toString - HSL 색상을 문자열로 변환한다.
d3.lab - specify L*a*b* 색공간의 색상을 지정한다.
lab.brighter - 지수 인자(gamma)로 명도를 늘린다.
lab.darker - 지수 인자(gamma)로 명도를 줄인다.
lab.rgb - L*a*b*를 RGB로 변환한다.
lab.toString - L*a*b* 색상을 문자열로 변환한다.
d3.hcl - HCL 색공간의 색상을 지정한다.
hcl.brighter - 지수 인자(gamma)로 명도를 늘린다.
hcl.darker - 지수 인자(gamma)로 명도를 줄인다.
hcl.rgb - HCL을 RGB로 변환한다.
hcl.toString - HCL 색상을 문자열로 변환한다.


<strong>Namespaces</strong>
d3.ns.prefix - 알려진 XML 네임스페이스를 접근하거나 확장한다.
d3.ns.qualify - "xlink:href"같은 접두사 명을 승인한다.
Internals
d3.functor - 상수를 반환하는 함수를 생성한다.
d3.rebind - 상속된 getter/setter 메서드를 하위클래스로 다시 엮는다.
d3.dispatch - 사용자 정의 이벤트 디스패처를 생성한다.
dispatch.on - 이벤트 리스너를 등록한다.
dispatch - 등록된 리스너로 이벤트를 전달한다.


<strong>Quantitative</strong>
d3.scale.linear - 정량적 선형 스케일(축척)을 생성한다.
linear - 주어진 정의역 값에 해당하는 치역 값을 반환한다.
linear.invert - 주어진 치역 값에 해당하는 정의역 값을 반환한다.
linear.domain - 스케일의 정의역을 지정하거나 가져온다.
linear.range - 스케일의 치역을 지정하거나 가져온다.
linear.rangeRound - 스케일의 치역을 지정하면서 가능할 경우 반올림한다.
linear.interpolate - 스케일의 출력 인터폴레이터를 지정하거나 가져온다.
linear.clamp - 치역 범위을 한정하거나 하지 않는다.
linear.nice - 스케일의 정의역을 보기좋은 숫자로 반올림 해서 확장한다.
linear.ticks - 도메인에서 대표적인 구분값들을 가져온다.
linear.tickFormat - 출력용 구분값을 위한 포매터를 가져온다.
linear.copy - 존재하는 스케일에서 신규 스케일을 생성한다.
d3.scale.sqrt - 제곱근 변환을 하는 정량 스케일을 생성한다.
d3.scale.pow - 지수 변환을 변환을 하는 정량 스케일을 생성한다.
pow - 주어진 정의역 값에 들어맞는 치역 값을 가져온다.
pow.invert - 주어진 치역 값에 들어맞는 정의역 값을 가져온다.
pow.domain - 스케일의 정의역을 get/set 한다.
pow.range - 스케일의 치역을 get/set 한다.
pow.rangeRound - 스케일의 치역을 반올림 해서 지정한다.
pow.interpolate - 스케일의 인터폴레이터를 get/set 한다.
pow.clamp - 치역 범위의 한정 여부를 결정한다.
pow.nice - 스케일의 정의역을 깔끔한 반올림 수로 확장한다.
pow.ticks - 정의역에서 대표할 값(구분자)들을 가져온다.
pow.tickFormat - 구분자를 출력할 포맷터를 가져온다.
pow.exponent - 제곱수의 지수를 get/set 한다.
pow.copy - 존재하는 스케일에서 신규 스케일을 생성한다.
d3.scale.log - 로그 변환을 하는 정량 스케일을 생성한다.
log - 주어진 정의역 값에 들어맞는 치역 값을 가져온다.
log.invert - 주어진 치역 값에 들어맞는 정의역 값을 가져온다.
log.domain - 스케일의 정의역을 get/set한다.
log.range - 스케일의 치역을 get/set한다.
log.rangeRound - 스케일의 치역을 반올림해서 지정한다.
log.interpolate - 스케일의 인터폴레이터를 get/set 한다.
log.clamp - 치역 범위의 한정 여부를 결정한다.
log.nice - 10배수로 깔끔하게 스케일 정의역을 확장한다.
log.ticks - 정의역에서 대표할 값(구분자)들을 가져온다.
log.tickFormat - 구분자를 출력할 포맷터를 가져온다.
log.copy - 존재하는 스케일에서 신규 스케일을 생성한다.
d3.scale.quantize - 분절된 치역의 선형 정량 스케일을 생성한다.
quantize - 주어진 정의역 값에 들어맞는 치역 값을 가져온다.
quantize.domain - 스케일의 정의역을 get/set한다.
quantize.range - 스케일의 치역(이산값)을 get/set 한다.
quantize.copy - 존재하는 스케일에서 신규 스케일을 생성한다.
d3.scale.threshold - 분절된 치역으로 임계값 스케일을 생성한다.
threshold - 주어진 정의역 값에 들어맞는 치역 값을 가져온다.
threshold.domain - 스케일의 정의역을 get/set한다.
threshold.range - 스케일의 치역역을 get/set한다.
threshold.copy - 존재하는 스케일에서 신규 스케일을 생성한다.
d3.scale.quantile - 사분위로 매핑된 정량 스케일을 생성한다.
quantile - 주어진 정의역 값에 들어맞는 치역 값을 가져온다.
quantile.domain - 스케일의 정의역(이산값)을 get/set한다.
quantile.range - 스케일의 치역(이산값)을 get/set 한다.
quantile.quantiles - 스케일의 사분위 임계값들을 가져온다.
quantile.copy - 존재하는 스케일에서 신규 스케일을 생성한다.
d3.scale.identity - 항등 선형 스케일을 생성한다.
identity - 그 항등함수
identity.invert - 항등함수와 같다.
identity.domain - 스케일의 정의역과 치역을 get/set 한다.
identity.range - identity.domain과 같다.
identity.ticks - 정의역을 대표할 값(구분자)들을 가져온다.
identity.tickFormat - 구분자를 출력할 포맷터를 가져온다.
identity.copy - 존재하는 스케일에서 신규 스케일을 생성한다.


<strong>Ordinal</strong>
d3.scale.category10 - 10개의 색상 카테고리로 순차 스케일 생성.
d3.scale.category20 - 20개의 색상 카테고리로 순차 스케일 생성.
d3.scale.category20b - 20개의 색상 카테고리로 순차 스케일 생성.
d3.scale.category20c - 20개의 색상 카테고리로 순차 스케일 생성.

d3.svg (SVG)


<strong>Shapes</strong>
d3.svg.line - 라인 제네레이터를 새로 생성.
line - 라인 차트 같은 구분된 선형 곡선(꺾은선. piecewise linear curve)을 생성한다.
line.x - x-좌표 접근자 get or set
line.y - y-좌표 접근자 get or set
d3.svg.area - 영역(area) 제네레이터를 새로 생성한다.
area - 영역 차트 같은 꺽은선 영역(piecewise linear area)을 생성한다.
area.x - x 좌표 접근자 get or set
area.x0 - x0 좌표 (기준선) 접근자 get or set
area.x1 - x1 좌표 (탑라인) 접근자 get or set
area.y - y 좌표 접근자 get or set
area.y0 - y0 좌표 (기준선) 접근자 get or set
area.y1 - y1 좌표 (탑라인) 접근자 get or set
d3.svg.arc - create a new arc generator.
arc.innerRadius - 도너츠 모양을 만들 때 안쪽의 반지름. get or set the inner radius accessor.
arc.outerRadius - 호의 크기를 결정함. get or set the outer radius accessor.
arc.startAngle - 호의 시작 각도. get or set the start angle accessor.
arc.endAngle - 호의 끝점 각도. get or set the end angle accessor.
arc.centroid - 호의 중심을 계산한다.


<strong>Axes</strong>
d3.svg.axis - 축(axis) 제네레이터를 새로 만든다.
axis - 주어진 selection이나 transition을 위해서 축을 갱신하거나 생성한다.
axis.scale - 축 스케일을 get or set.
axis.orient - 축 위치 get or set.
axis.tickSubdivide - 균등한 세부 구분자(옵션)
axis.tickSize - 주 구분자, 하위 구분자, 종료 구분자 크기 지정.