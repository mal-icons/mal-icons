import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-yeti",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiYeti {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.58 8.58v1.69h2.18v5.15h2.14v-5.15h2.18V8.58h-6.5ZM0 8.58l2.7 3.97v2.86h2.14v-2.86l2.69-3.97H5.17l-1.4 2.31-1.4-2.31zm8.02 0v6.84h5.84v-1.66h-3.69v-0.97H13.3v-1.54h-3.13v-0.97h3.59V8.58Zm13.83 0 0 6.84H24V8.58Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiYeti;
