import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-edgesensor-high",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoEdgesensorHigh {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0-280v-280h60v280H0Zm120-120v-280h60v280h-60ZM301-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h359q24 0 42 18t18 42v680q0 24-18 42t-42 18H301Zm359-90H301v30h359v-30Zm-359-60h359v-500H301v500Zm0-560h359v-30H301v30Zm479 510v-280h60v280h-60Zm120-120v-280h60v280h-60ZM301-790v-30 30Zm0 620v30-30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoEdgesensorHigh;
