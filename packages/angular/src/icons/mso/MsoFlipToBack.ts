import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-flip-to-back",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoFlipToBack {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-120q-24 0-42-18t-18-42v-512h60v512h512v60H180Zm144-144q-24 0-42-18t-18-42h60v60Zm-60-148v-96h60v96h-60Zm0-184v-96h60v96h-60Zm0-184q0-24 18-42t42-18v60h-60Zm148 516v-60h96v60h-96Zm0-516v-60h96v60h-96Zm184 516v-60h96v60h-96Zm0-516v-60h96v60h-96Zm184 516v-60h60q0 24-18 42t-42 18Zm0-148v-96h60v96h-60Zm0-184v-96h60v96h-60Zm0-184v-60q24 0 42 18t18 42h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoFlipToBack;
