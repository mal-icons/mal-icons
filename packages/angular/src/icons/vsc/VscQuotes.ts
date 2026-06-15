import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-quotes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscQuotes {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 6.5C9 6.22 9.22 6 9.5 6L10.5 6C10.78 6 11 6.22 11 6.5C11 8.23 10.28 9.42 9.85 9.85C9.66 10.05 9.34 10.05 9.15 9.85C8.95 9.66 8.95 9.34 9.15 9.15C9.3 9 9.6 8.57 9.8 7.9C9.72 7.96 9.61 8 9.5 8C9.22 8 9 7.78 9 7.5V6.5Z"}],["path",{"d":"M12 6.5C12 6.22 12.22 6 12.5 6L13.5 6C13.78 6 14 6.22 14 6.5C14 8.23 13.28 9.42 12.85 9.85C12.66 10.05 12.34 10.05 12.15 9.85C11.95 9.66 11.95 9.34 12.15 9.15C12.3 9 12.6 8.57 12.8 7.9C12.72 7.96 12.61 8 12.5 8C12.22 8 12 7.78 12 7.5V6.5Z"}],["path",{"d":"M6.5 10C6.78 10 7 9.78 7 9.5V8.5C7 8.22 6.78 8 6.5 8C6.39 8 6.29 8.04 6.2 8.1C6.4 7.43 6.7 7 6.85 6.85C7.05 6.66 7.05 6.34 6.85 6.15C6.66 5.95 6.34 5.95 6.15 6.15C5.72 6.58 5 7.77 5 9.5C5 9.78 5.22 10 5.5 10L6.5 10Z"}],["path",{"d":"M4 9.5C4 9.78 3.78 10 3.5 10L2.5 10C2.22 10 2 9.78 2 9.5C2 7.77 2.72 6.58 3.15 6.15C3.34 5.95 3.66 5.95 3.85 6.15C4.05 6.34 4.05 6.66 3.85 6.85C3.7 7 3.4 7.43 3.2 8.1C3.29 8.04 3.39 8 3.5 8C3.78 8 4 8.22 4 8.5V9.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscQuotes;
