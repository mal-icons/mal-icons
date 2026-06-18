import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-sparkling-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSparkling2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 1.21 18.32 3.68 20.79 5 18.32 6.32 17 8.79 15.68 6.32 13.21 5 15.68 3.68 17 1.21ZM8 4.33 10.67 9.33 15.67 12 10.67 14.67 8 19.67 5.33 14.670.33 12 5.33 9.33 8 4.33ZM19.67 16.33 18 13.21 16.33 16.33 13.21 18 16.33 19.67 18 22.79 19.67 19.67 22.79 18 19.67 16.33Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSparkling2Fill;
