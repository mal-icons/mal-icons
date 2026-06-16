import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-keyboard-option-key",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrKeyboardOptionKey {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 6c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1s-0.45-1-1-1h-4c-0.55 0-1 0.45-1 1zM9.58 6c-0.36-0.62-1.02-1-1.73-1H4c-0.55 0-1 0.45-1 1s0.45 1 1 1h3.85l6.35 11c0.360.62 1.02 1 1.73 1H20c0.55 0 1-0.45 1-1s-0.45-1-1-1h-4.07L9.58 6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrKeyboardOptionKey;
