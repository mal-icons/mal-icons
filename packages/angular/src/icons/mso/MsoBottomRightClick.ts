import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-bottom-right-click",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBottomRightClick {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-120v-60h660v-660h60v660q0 24.75-17.62 42.38T780-120H120Zm479.91-170Q571-290 550.5-310.59q-20.5-20.59-20.5-49.5Q530-389 550.59-409.5q20.59-20.5 49.5-20.5Q629-430 649.5-409.41q20.5 20.59 20.5 49.5Q670-331 649.41-310.5q-20.59 20.5-49.5 20.5ZM220-480v-60h158L119-799l42-42 259 259v-158h60v260H220Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBottomRightClick;
