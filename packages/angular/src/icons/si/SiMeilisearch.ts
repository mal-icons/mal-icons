import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-meilisearch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMeilisearch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m6.51 19 4.43-11.34a4.17 4.17 0 0 1 3.88-2.65h2.67l-4.43 11.35a4.17 4.17 0 0 1-3.88 2.65H6.51Zm6.51 0 4.43-11.34a4.17 4.17 0 0 1 3.88-2.65H24l-4.43 11.35a4.17 4.17 0 0 1-3.88 2.65H13.01Zm-13.01 0L4.43 7.65a4.17 4.17 0 0 1 3.88-2.65h2.67L6.56 16.35a4.17 4.17 0 0 1-3.88 2.65H0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMeilisearch;
