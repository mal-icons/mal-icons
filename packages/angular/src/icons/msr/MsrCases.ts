import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-cases",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrCases {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M100-80q-24 0-42-18t-18-42v-429q0-12.75 8.68-21.37Q57.35-599 70.18-599 83-599 91.5-590.37T100-569v429h579q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5Q709-97 700.38-88.5T679-80H100Zm120-120q-24 0-42-18t-18-42v-488q0-12.75 8.63-21.37T190-778h212v-82q0-24 18-42t42-18h156q24 0 42 18t18 42v82h212q12.75 0 21.38 8.63T920-748v488q0 24-18 42t-42 18H220Zm0-60h640v-458H220v458Zm242-518h156v-82H462v82ZM220-260v-458 458Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrCases;
