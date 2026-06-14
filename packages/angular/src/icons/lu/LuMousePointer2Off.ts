import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-mouse-pointer-2-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuMousePointer2Off {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m15.55 8.45 5.14 2.09a0.50.5 0 0 1-0.060.95l-6.12 1.58a2 2 0 0 0-1.44 1.44l-1.58 6.13a0.50.5 0 0 1-0.950.06L8.45 15.55"}],["path",{"d":"M22 2 2 22"}],["path",{"d":"m6.82 11.53-2.78-6.84a0.50.5 0 0 1 0.65-0.65l6.84 2.78"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuMousePointer2Off;
