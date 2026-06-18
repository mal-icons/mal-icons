import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-blaze-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBlazeFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.5 9C19.5 10.06 20 11.39 20 13C20 16.47 16.3 17.28 14.5 22C13.83 21.43 13.5 20.59 13.5 19.5C13.5 16.02 18.5 14.21 18.5 9ZM14.5 5C15.7 6.24 16.3 7.57 16.3 9C16.3 13.95 10.26 14.69 11.5 22C9.83 20.84 9 19.17 9 17C9 13.68 14.5 11 14.5 5ZM10 1C11.33 2.67 12 4.17 12 5.5C12 11.75 3.5 13.72 8 22C5.38 21.42 3.5 19 3.5 16C3.5 9.5 10 8.5 10 1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBlazeFill;
