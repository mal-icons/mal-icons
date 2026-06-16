import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-phonelink-lock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssPhonelinkLock {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M600-320v-200h40v-40q0-33 23.5-56.5T720-640q33 0 56.5 23.5T800-560v40h40v200H600Zm80-200h80v-40q0-17-11.5-28.5T720-600q-17 0-28.5 10.93T680-562v42ZM200-40v-880h560v206h-60v-56H260v580h440v-56h60v206H200Zm60-90v30h440v-30H260Zm0-700h440v-30H260v30Zm0 0v-30 30Zm0 700v30-30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssPhonelinkLock;
