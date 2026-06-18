import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-disqus-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDisqusFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C9.47 22 7.16 21.06 5.4 19.51L1.5 20L2.92 16.2C2.33 14.93 2 13.5 2 12C2 6.48 6.48 2 12 2ZM8 7V17H11.73L12 17C15.37 16.89 17.33 14.78 17.33 11.97V11.94L17.33 11.73C17.23 8.96 15.21 7 11.79 7H8ZM11.83 9.46C13.46 9.46 14.54 10.39 14.54 11.99V12.01L14.54 12.2C14.46 13.7 13.4 14.54 11.83 14.54H10.72V9.46H11.83Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDisqusFill;
