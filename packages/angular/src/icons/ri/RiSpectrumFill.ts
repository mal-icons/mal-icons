import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-spectrum-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSpectrumFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.2 2.01C21.24 2.09 22 3.25 22 12L21.99 13.2C21.91 21.24 20.75 22 12 22L10.8 21.99C3.14 21.91 2.09 20.86 2.01 13.2L2 11.69L2.01 10.8C2.09 2.95 3.2 2.04 11.39 2L13.2 2.01ZM8.25 7H7.67C7.33 7 7.06 7.25 7.01 7.57L7 7.67V11.33C7 11.67 7.25 11.95 7.57 11.99L7.67 12H8.25C10.25 12 11.89 13.57 12 15.55L12 15.75V16.33C12 16.67 12.25 16.95 12.57 16.99L12.67 17H16.33C16.67 17 16.95 16.75 16.99 16.43L17 16.33V15.75C17 11 13.22 7.14 8.51 7L8.25 7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSpectrumFill;
