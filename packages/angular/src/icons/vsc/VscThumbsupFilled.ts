import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-thumbsup-filled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscThumbsupFilled {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 8.5V13.5C1 14.33 1.67 15 2.5 15H4V7H2.5C1.67 7 1 7.67 1 8.5ZM14.57 6.82C14.19 6.3 13.6 6 12.96 6H9.53L9.99 3.68C10.12 3.02 9.95 2.34 9.53 1.82C9.1 1.3 8.47 1 7.79 1C7.35 1 6.96 1.3 6.84 1.69L6.38 2.98C6.02 3.98 5.55 4.94 5 5.86V15H11.4C12.28 15 13.05 14.44 13.31 13.6L14.87 8.6C15.06 7.98 14.95 7.33 14.57 6.82Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscThumbsupFilled;
