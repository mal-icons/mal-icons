import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-cloud-cog",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCloudCog {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 18h-5.34c-2.57 0 -4.66 -2.01 -4.66 -4.49c0 -2.47 2.09 -4.48 4.66 -4.48c0.39 -1.76 1.79 -3.2 3.68 -3.77c1.88 -0.57 3.96 -0.19 5.44 1c1.49 1.19 2.16 3.01 1.77 4.77h0.99c0.96 0 1.82 0.39 2.45 1.02"}],["path",{"d":"M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M19 15.5v1.5"}],["path",{"d":"M19 21v1.5"}],["path",{"d":"M22.03 17.25l-1.3 0.75"}],["path",{"d":"M17.27 20l-1.3 0.75"}],["path",{"d":"M15.97 17.25l1.3 0.75"}],["path",{"d":"M20.73 20l1.3 0.75"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCloudCog;
