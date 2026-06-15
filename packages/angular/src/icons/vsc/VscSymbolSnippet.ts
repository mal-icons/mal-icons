import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-symbol-snippet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscSymbolSnippet {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.5 12C12.37 12 12.24 11.95 12.15 11.85C12.05 11.76 12 11.63 12 11.5V4C12 3.73 11.89 3.48 11.71 3.29C11.52 3.11 11.27 3 11 3H5C4.73 3 4.48 3.11 4.29 3.29C4.11 3.48 4 3.73 4 4V11.5C4 11.63 3.95 11.76 3.85 11.85C3.76 11.95 3.63 12 3.5 12C3.37 12 3.24 11.95 3.15 11.85C3.05 11.76 3 11.63 3 11.5V4C3 3.47 3.21 2.96 3.59 2.59C3.96 2.21 4.47 2 5 2H11C11.53 2 12.04 2.21 12.41 2.59C12.79 2.96 13 3.47 13 4V11.5C13 11.63 12.95 11.76 12.85 11.85C12.76 11.95 12.63 12 12.5 12Z"}],["path",{"d":"M5.5 13.5C5.5 13.63 5.45 13.76 5.35 13.85C5.26 13.95 5.13 14 5 14H3.5C3.37 14 3.24 13.95 3.15 13.85C3.05 13.76 3 13.63 3 13.5C3 13.37 3.05 13.24 3.15 13.15C3.24 13.05 3.37 13 3.5 13H5C5.13 13 5.26 13.05 5.35 13.15C5.45 13.24 5.5 13.37 5.5 13.5ZM9 13H7C6.87 13 6.74 13.05 6.65 13.15C6.55 13.24 6.5 13.37 6.5 13.5C6.5 13.63 6.55 13.76 6.65 13.85C6.74 13.95 6.87 14 7 14H9C9.13 14 9.26 13.95 9.35 13.85C9.45 13.76 9.5 13.63 9.5 13.5C9.5 13.37 9.45 13.24 9.35 13.15C9.26 13.05 9.13 13 9 13ZM12.5 13H11C10.87 13 10.74 13.05 10.65 13.15C10.55 13.24 10.5 13.37 10.5 13.5C10.5 13.63 10.55 13.76 10.65 13.85C10.74 13.95 10.87 14 11 14H12.5C12.63 14 12.76 13.95 12.85 13.85C12.95 13.76 13 13.63 13 13.5C13 13.37 12.95 13.24 12.85 13.15C12.76 13.05 12.63 13 12.5 13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscSymbolSnippet;
