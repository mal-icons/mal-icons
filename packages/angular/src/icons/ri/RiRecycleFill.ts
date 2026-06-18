import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-recycle-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRecycleFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.56 12.1L21.09 14.75C22.06 16.42 21.49 18.56 19.81 19.53C19.28 19.84 18.68 20 18.06 20L16 20V22L11 18.5L16 15V17L18.06 17C18.15 17 18.24 16.98 18.31 16.93C18.52 16.81 18.61 16.56 18.53 16.33L18.49 16.25L16.96 13.6L19.56 12.1ZM7.74 9.38L8.27 15.46L6.54 14.46L5.5 16.25C5.46 16.33 5.44 16.41 5.44 16.5C5.44 16.75 5.61 16.95 5.85 16.99L5.94 17L9 17V20L5.94 20C4 20 2.44 18.43 2.44 16.5C2.44 15.89 2.6 15.28 2.91 14.75L3.94 12.96L2.21 11.96L7.74 9.38ZM13.75 2.97C14.28 3.28 14.72 3.72 15.03 4.25L16.06 6.04L17.79 5.04L17.26 11.12L11.73 8.54L13.46 7.54L12.43 5.75C12.39 5.67 12.33 5.61 12.25 5.57C12.04 5.44 11.77 5.5 11.62 5.68L11.57 5.75L10.04 8.4L7.44 6.9L8.97 4.25C9.93 2.58 12.08 2 13.75 2.97Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRecycleFill;
