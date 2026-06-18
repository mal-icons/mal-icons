import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-number-0",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiNumber0 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 1.5C13.32 1.5 14.48 1.85 15.45 2.49C16.41 3.14 17.17 4.08 17.7 5.27C18.22 6.46 18.5 7.9 18.5 9.53V14.47C18.5 16.1 18.22 17.54 17.7 18.73C17.17 19.92 16.41 20.86 15.45 21.51C14.48 22.15 13.32 22.5 12 22.5C10.68 22.5 9.52 22.15 8.55 21.51C7.59 20.86 6.83 19.92 6.3 18.73C5.78 17.54 5.5 16.1 5.5 14.47V9.53C5.5 7.9 5.78 6.46 6.3 5.27C6.83 4.08 7.59 3.14 8.55 2.49C9.52 1.85 10.68 1.5 12 1.5ZM12 3.5C11.08 3.5 10.31 3.73 9.67 4.15C9.03 4.58 8.51 5.22 8.14 6.08C7.72 7.02 7.5 8.18 7.5 9.53V14.47C7.5 15.82 7.72 16.98 8.14 17.92C8.51 18.78 9.03 19.42 9.67 19.85C10.31 20.27 11.08 20.5 12 20.5C12.92 20.5 13.69 20.27 14.33 19.85C14.97 19.42 15.49 18.78 15.86 17.92C16.28 16.98 16.5 15.82 16.5 14.47V9.53C16.5 8.18 16.28 7.02 15.86 6.08C15.49 5.22 14.97 4.58 14.33 4.15C13.69 3.73 12.92 3.5 12 3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiNumber0;
