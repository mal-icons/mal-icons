import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-shine",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfShine {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM8.5 11c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9 4h-1v-3h1v3zM8 13h1v3h-1v-3zM16 8v1h-3v-1h3zM4 9h-3v-1h3v1zM12.04 5.67l-0.71-0.71 2.12-2.12 0.71 0.71-2.12 2.12zM4.96 11.33l0.71 0.71-2.12 2.12-0.71-0.71 2.12-2.12zM12.04 11.33l2.12 2.12-0.71 0.71-2.12-2.12 0.71-0.71zM4.96 5.67l-2.12-2.12 0.71-0.71 2.12 2.12-0.71 0.71z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfShine;
