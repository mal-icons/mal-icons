import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-css3-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCss3Alt {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 6 4 L 8 25 L 16 28 L 24 25 L 26 4 L 6 4 z M 9.33 7 L 22.65 7 L 22.39 10 L 16.7 13 L 19.12 13 L 22 13 L 22.12 13 L 21.61 19.01 L 21.63 19 L 21.36 22 L 16 24 L 10.63 22 L 10.3 18 L 13.33 18 L 13.48 20.03 L 16 20.9 L 18.52 20.05 L 18.87 16 L 10.13 16 L 9.87 13 L 15.78 10 L 9.61 10 L 9.33 7 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCss3Alt;
