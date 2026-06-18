import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-ticktick",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTicktick {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12h-2.7c0 5.13-4.17 9.3-9.3 9.3-5.13 0-9.3-4.17-9.3-9.3 0-5.13 4.17-9.3 9.3-9.3V0Zm7.4 2.58-7.5 9.37L8.39 9.08l-2 2.44 4.74 3.89a1.57 1.57 0 0 0 2.23-0.23l8.5-10.62L19.4 2.58Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTicktick;
