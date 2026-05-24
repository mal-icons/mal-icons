import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icon/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-youtube",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icon [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icon>`,
})
export class FiYoutube {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.60.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 0.46 5.33A2.78 2.78 0 0 0 3.4 19c1.720.46 8.60.46 8.60.46s6.88 0 8.6-0.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 0.46-5.25 29 29 0 0 0-0.46-5.33z"}],["polygon",{"points":"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}
