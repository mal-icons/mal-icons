import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-apps-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiApps2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 11.5C4.51 11.5 2.5 9.49 2.5 7C2.5 4.51 4.51 2.5 7 2.5C9.49 2.5 11.5 4.51 11.5 7C11.5 9.49 9.49 11.5 7 11.5ZM7 21.5C4.51 21.5 2.5 19.49 2.5 17C2.5 14.51 4.51 12.5 7 12.5C9.49 12.5 11.5 14.51 11.5 17C11.5 19.49 9.49 21.5 7 21.5ZM17 11.5C14.51 11.5 12.5 9.49 12.5 7C12.5 4.51 14.51 2.5 17 2.5C19.49 2.5 21.5 4.51 21.5 7C21.5 9.49 19.49 11.5 17 11.5ZM17 21.5C14.51 21.5 12.5 19.49 12.5 17C12.5 14.51 14.51 12.5 17 12.5C19.49 12.5 21.5 14.51 21.5 17C21.5 19.49 19.49 21.5 17 21.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiApps2Fill;
