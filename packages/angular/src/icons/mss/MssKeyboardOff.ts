import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-keyboard-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssKeyboardOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M857-56 106-805l43-43L899-98l-42 42ZM300-325v-60h312l60 60H300Zm-97-125v-60h60v60h-60Zm124 0v-60h60v60h-60Zm370 0v-60h60v60h-60ZM203-575v-60h60v60h-60Zm371 0v-60h60v60h-60Zm123 0v-60h60v60h-60Zm123 312v-437H383l-60-60h557v558l-60-61ZM80-200v-560h157l60 60H140v440h597l60 60H80Zm368-435h62l-2 60-60-60Zm125 125h61l-2 60-59-60Zm-141 30Zm169-2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssKeyboardOff;
