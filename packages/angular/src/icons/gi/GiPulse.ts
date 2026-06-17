import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-pulse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiPulse {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 16c-120 0-135 105-60 195 0-165 135-45 135-135 0-30-45-60-75-60zm146.25 134.53C370.61 152.55 334.75 167.88 301 196c165 0 45 135 135 135 30 0 60-45 60-75 0-75-41.02-108.84-93.75-105.47zM76 181c-30 0-60 45-60 75 0 120 105 135 195 60-165 0-45-135-135-135zm175.78 15A60 60 0 0 0 196 256a60 60 0 0 0 120 0 60 60 0 0 0-64.22-60zM316 301c0 165-135 45-135 135 0 30 45 60 75 60 120 0 135-105 60-195z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiPulse;
