import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-skip-forward-mini-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSkipForwardMiniFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.79 17.44C7.7 17.5 7.6 17.54 7.5 17.54C7.22 17.54 7 17.31 7 17.04V6.96C7 6.86 7.03 6.76 7.09 6.68C7.25 6.45 7.56 6.4 7.79 6.56L14.92 11.59C14.97 11.62 15.01 11.67 15.04 11.71C15.2 11.94 15.15 12.25 14.92 12.41L7.79 17.44ZM16 7C16 6.45 16.45 6 17 6C17.55 6 18 6.45 18 7V17C18 17.55 17.55 18 17 18C16.45 18 16 17.55 16 17V7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSkipForwardMiniFill;
