import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-award-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAwardFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 15.25V22.12C17 22.39 16.78 22.62 16.5 22.62C16.41 22.62 16.32 22.59 16.24 22.55L12 20L7.76 22.55C7.52 22.69 7.21 22.61 7.07 22.37C7.02 22.3 7 22.21 7 22.12V15.25C5.17 13.78 4 11.53 4 9C4 4.58 7.58 1 12 1C16.42 1 20 4.58 20 9C20 11.53 18.83 13.78 17 15.25ZM12 15C15.31 15 18 12.31 18 9C18 5.69 15.31 3 12 3C8.69 3 6 5.69 6 9C6 12.31 8.69 15 12 15ZM12 13C9.79 13 8 11.21 8 9C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 11.21 14.21 13 12 13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAwardFill;
