import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-thrust-bend",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiThrustBend {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M128.84 62.33c-23.15 0-43.74 5.14-59.52 17.67-104.52 82.96 16 400 16 400h400S62.47 282.86 142.14 144c36.26-63.2 188.82 28.36 236.46 59.1-13.83 12.3-36.35 21.55-62.67 35.74 42.77 7.38 107.96-6.07 133.07-19.82-16.71-54.74-41.26-98.91-83.79-123.87 12.64 27.46 22.2 50.35 23.25 70.88-27.07-17.56-164.66-103.69-259.61-103.69z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiThrustBend;
