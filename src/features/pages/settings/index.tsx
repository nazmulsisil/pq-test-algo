import { Container, Row, Col } from 'react-bootstrap'
import Select from 'react-select'
import { useAppSelector } from 'src/app/hooks';
import { RootState } from 'src/app/store';
import { selectCustomStyles, selectDarkThemeConfig, selectThemeConfig } from 'src/features/utils/ReusableElements/ReactSelect/ReactSelect'

function Settings() {
  const isLightTheme = useAppSelector((state: RootState) => state.themeCustomizer.mixLayout)
  const themeConfig = isLightTheme ? selectThemeConfig : selectDarkThemeConfig;
  return (
    <Container fluid>
      <Row>
        <Col xs={4}>
          <Select
            styles={selectCustomStyles as any}
            theme={themeConfig}
            isLoading={false}
            className="form-control p-0 m-8"
            escapeClearsValue
            isSearchable
            options={[]}
            placeholder="Select Option"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Settings
