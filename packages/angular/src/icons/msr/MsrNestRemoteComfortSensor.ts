import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-nest-remote-comfort-sensor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNestRemoteComfortSensor {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-120q-63 0-106.5-43.5T330-270q0-63 43.5-106.5T480-420q63 0 106.5 43.5T630-270q0 63-43.5 106.5T480-120Zm0-60q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26ZM122-640l-44-41q80-76 182-117.5T480-840q118 0 220 41.5T882-681l-44 41q-72-67-162-103.5T480-780q-106 0-196 36.5T122-640Zm570 148q-43-36-97-57t-115-21q-61 0-114.5 21T268-492l-44-42q51-45 117-70.5T480-630q73 0 138.5 25.5T735-534l-43 42ZM480-270Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNestRemoteComfortSensor;
