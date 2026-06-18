import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-nationalrail",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNationalrail {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 12C0 5.37 5.37 0 12 0c6.63 0 12 5.37 12 12 0 6.63-5.37 12-12 12-6.63 0-12-5.37-12-12Zm6.2-5.84 6.08 2.79H2.84v1.88h9.5l-4.62 2.25H2.84v1.87h4.88l5.78 2.8h4.33l-6.09-2.79h9.47v-1.87h-9.45l4.62-2.25h4.84V8.95h-4.87l-5.78-2.79H6.2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNationalrail;
