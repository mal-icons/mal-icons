import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-number-9",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiNumber9 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 1.5C15.59 1.5 18.5 4.41 18.5 8C18.5 9.19 18.18 10.31 17.62 11.27L11.42 22H9.11L13.55 14.31C13.06 14.44 12.54 14.5 12 14.5C8.41 14.5 5.5 11.59 5.5 8C5.5 4.41 8.41 1.5 12 1.5ZM12 3.5C9.51 3.5 7.5 5.51 7.5 8C7.5 10.49 9.51 12.5 12 12.5C14.49 12.5 16.5 10.49 16.5 8C16.5 5.51 14.49 3.5 12 3.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiNumber9;
