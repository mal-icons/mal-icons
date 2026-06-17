import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-divided-square",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiDividedSquare {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M247.2 26l-104.38 104.36 104.38 104.39V26zm17.61 0v208.75l104.39-104.39L264.81 26zm116.84 116.81L277.25 247.2H486l-104.36-104.39zm-251.280.01L26 247.2h208.75l-104.39-104.38zM26 264.8l104.36 104.39 104.39-104.39H26zm251.25 0l104.39 104.38L486 264.8H277.25zm-30.05 12.45L142.78 381.64 247.2 486V277.25zm17.61 0V486l104.36-104.36L264.8 277.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiDividedSquare;
