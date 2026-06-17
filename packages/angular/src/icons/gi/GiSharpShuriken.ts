import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-sharp-shuriken",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSharpShuriken {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M395.13 313l89.87-100.86H388.08c-45.75 0-82.82-37.06-82.82-82.82l-0.3-33.21-100.86-77.15v96.92c0 45.75-37.06 82.82-82.82 82.82l-9.840.3L27 299.86h96.92c45.75 0 82.82 37.06 82.82 82.82l0.3 20.48 100.85 89.87v-96.91c0-45.75 37.06-82.82 82.82-82.82zM256 306.67c-27.99 0-50.67-22.68-50.67-50.66 0-27.99 22.68-50.67 50.67-50.67 27.99 0 50.67 22.68 50.67 50.67 0 27.98-22.68 50.67-50.67 50.67z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSharpShuriken;
