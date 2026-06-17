import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-spine-arrow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSpineArrow {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M14.56 15.41v104.75L72.97 135.72l52.44 52.47 34.72-18.59 8.81 16.47-86.19 46.16 119.88 33.16 84.28 84.31 20.22-7.59 6.56 17.5-65.44 24.59L491 494 381.81 252.72l-26.03 68.31-17.47-6.65 8.94-23.47-21.41-21.44-33.28-120.31-2.72 5.06-41.62 77.84-16.5-8.81 16.69-31.22-46.37-46.37-33.06-119.53-43.06 80.78-16.5-8.78 15.69-29.41L71.78 15.41H14.56z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSpineArrow;
