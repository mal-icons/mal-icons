import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-open-arm-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiOpenArmFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 12C9.24 12 7 9.76 7 7C7 4.24 9.24 2 12 2C14.76 2 17 4.24 17 7C17 9.76 14.76 12 12 12ZM18 17V22H16V17C16 12.55 18.64 8.71 22.45 6.98L23.28 8.8C20.16 10.22 18 13.36 18 17ZM8 17V22H6V17C6 13.36 3.84 10.22 0.73 8.8L1.55 6.98C5.36 8.71 8 12.55 8 17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiOpenArmFill;
