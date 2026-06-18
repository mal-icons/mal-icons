import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-scrollreveal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiScrollreveal {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.71 2.86A1.71 1.71 0 0 0 0 4.57v6.86c0 0.950.77 1.71 1.71 1.71a1.71 1.71 0 0 0 1.72-1.71V4.57a1.71 1.71 0 0 0-1.71-1.71zm6.86 0a1.71 1.71 0 0 0-1.71 1.71v1.14c0 0.950.77 1.72 1.71 1.72a1.71 1.71 0 0 0 1.72-1.71V4.57A1.71 1.71 0 0 0 8.57 2.86zm6.86 0a1.71 1.71 0 0 0-1.71 1.71V19.43c0 0.950.77 1.71 1.72 1.71a1.71 1.71 0 0 0 1.71-1.71V4.57a1.71 1.71 0 0 0-1.71-1.71zm6.86 0a1.71 1.71 0 0 0-1.71 1.71v6.86c0 0.950.77 1.71 1.72 1.71A1.71 1.71 0 0 0 24 11.43V4.57a1.71 1.71 0 0 0-1.71-1.71zm-13.71 8a1.71 1.71 0 0 0-1.71 1.71v6.86c0 0.950.77 1.71 1.71 1.71a1.71 1.71 0 0 0 1.72-1.71V12.57a1.71 1.71 0 0 0-1.71-1.71zm-6.86 5.71A1.71 1.71 0 0 0 0 18.29v1.14c0 0.950.77 1.71 1.71 1.71a1.71 1.71 0 0 0 1.72-1.71v-1.14a1.71 1.71 0 0 0-1.71-1.71zm20.57 0a1.71 1.71 0 0 0-1.71 1.72v1.14c0 0.950.77 1.71 1.72 1.71A1.71 1.71 0 0 0 24 19.43v-1.14a1.71 1.71 0 0 0-1.71-1.71Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiScrollreveal;
