import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-contrast-drop-2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiContrastDrop2Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.64 6.63L12 0.27L18.36 6.63C21.88 10.15 21.88 15.85 18.36 19.36C14.85 22.88 9.15 22.88 5.64 19.36C2.12 15.85 2.12 10.15 5.64 6.63H5.64ZM12 3.1L7.05 8.05C5.78 9.31 5 11.06 5 13H19C19 11.06 18.22 9.31 16.95 8.05L12 3.1Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiContrastDrop2Fill;
