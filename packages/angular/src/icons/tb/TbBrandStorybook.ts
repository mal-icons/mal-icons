import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-storybook",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandStorybook {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 4l0.5 16.5l13.5 0.5v-18l-14 1"}],["path",{"d":"M9 15c0.6 1.5 1.64 2 3.28 2h-0.28c1.8 0 3 -0.97 3 -2.43c0 -1.19 -0.83 -1.8 -2.15 -2.33l-1.97 -0.8c-1.15 -0.47 -1.88 -1.42 -1.88 -2.47c0 -0.97 0.9 -1.79 2.09 -1.89l0.61 -0.05c1.53 -0.14 3 0.76 3.3 1.99"}],["path",{"d":"M16 3.5v1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandStorybook;
