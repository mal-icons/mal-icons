import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-folded-paper",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFoldedPaper {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M210.28 18.34c-21.36 43.31-84.9 72.3-146.97 101.78L181.22 156.94 54.31 142.5c28.59 58.05 71.69 113.35 120.97 157.75l99.31 29.91L179 323.31c-35.16 32.77-95.2 70.74-161.5 91.78 88.45 40.53 161.28 46.96 280.34 77.25C378.36 453.12 415.57 425.64 470.09 382l-149.25-42.44 147.47 18.94c-49.76-45.25-89.57-102.69-115.47-161.44L227.53 165.13l141.06 13.59c55.1-20.42 85.08-49.28 124.53-102.28-97.71-20.99-177.93-45.69-282.84-58.09z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFoldedPaper;
