import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-dynamic-form",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDynamicForm {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-510q-24.75 0-42.37-17.62T80-570v-170q0-24.75 17.63-42.37T140-800h400v290H140Zm0-60h340v-170H140v170Zm0 410q-24.75 0-42.37-17.62T80-220v-170q0-24.75 17.63-42.37T140-450h480v290H140Zm0-60h420v-170H140v170Zm540 60v-350h-80v-290h280l-80 220h80L680-160ZM195-275h60v-60h-60v60Zm0-350h60v-60h-60v60Zm-55 55v-170 170Zm0 350v-170 170Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDynamicForm;
