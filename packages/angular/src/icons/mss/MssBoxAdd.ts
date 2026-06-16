import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-box-add",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssBoxAdd {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M640-674h140-140Zm-460 0h390-22 21-389Zm17-60h565l-36.41-46H233l-36 46Zm183 305 100-50 100 50v-245H380v245Zm232 309H120v-609l82-111h555l83 111v255q-14-5-29-8.5t-31-5.5v-186H640v224q-23 16-40.5 37T570-367l-90-45-160 80v-342H180v494h389q8 17 18.5 32.09Q598-132.82 612-120Zm120-3v-120H612v-60h120v-120h60v120h120v60H792v120h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssBoxAdd;
