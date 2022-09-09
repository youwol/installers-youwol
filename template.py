from pathlib import Path

from youwol.pipelines.pipeline_typescript_weback_npm import Template, PackageType, Dependencies, \
    RunTimeDeps, generate_template

template = Template(
    path=Path(__file__).parent,
    type=PackageType.Library,
    name="@youwol/installers-youwol",
    version="0.0.2-wip",
    shortDescription="Collections of standards installers for youwol",
    author="greinisch@youwol.com",
    dependencies=Dependencies(
        runTime=RunTimeDeps(
            load={
                "@youwol/installers-stories": "^0.0.2",
                "@youwol/installers-flux": "^0.0.3",
                "@youwol/os-core": "^0.0.6",
                "@youwol/flux-view": "^0.1.1",
                "@youwol/fv-input": "^0.1.0",
                "@youwol/http-clients": "^0.1.11",
                "@youwol/cdn-client": "^0.1.4",
                "rxjs": "^6.5.5"
            },
            differed={
            }
        ),
        devTime={
            "uuid": "^8.3.2",
            "@youwol/cdn-client": "^0.1.3",
            "codemirror": "^5.5.0",
            "@typescript/vfs": "^1.3.5",
            "@youwol/fv-code-mirror-editors": "^0.0.1",
            "@youwol/fv-group": "^0.1.1",
            "@youwol/fv-button": "^0.0.4",
            "lodash": "^4.17.15"
        }
    ),
    userGuide=True
    )

generate_template(template)
