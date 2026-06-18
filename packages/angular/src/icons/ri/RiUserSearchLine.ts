import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-user-search-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiUserSearchLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 14V16C8.69 16 6 18.69 6 22H4C4 17.58 7.58 14 12 14ZM12 13C8.69 13 6 10.32 6 7C6 3.69 8.69 1 12 1C15.32 1 18 3.69 18 7C18 10.32 15.32 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM21.45 20.03L22.95 21.54L21.54 22.95L20.03 21.45C19.44 21.8 18.74 22 18 22C15.79 22 14 20.21 14 18C14 15.79 15.79 14 18 14C20.21 14 22 15.79 22 18C22 18.74 21.8 19.44 21.45 20.03ZM18 20C19.1 20 20 19.1 20 18C20 16.9 19.1 16 18 16C16.9 16 16 16.9 16 18C16 19.1 16.9 20 18 20Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiUserSearchLine;
