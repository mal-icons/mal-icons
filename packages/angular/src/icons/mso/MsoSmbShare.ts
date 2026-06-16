import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-smb-share",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSmbShare {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M457-430h181q24.32 0 41.16-16.77 16.84-16.77 16.84-41Q696-512 679.16-529.5 662.32-547 638-547h-12l-2-10q-4-31-27.78-52-23.77-21-56.47-21Q514-630 492-617q-22 13-30 36l-2 7h-8q-29 0-48.5 21.5T384-502.14q0 28.86 21.5 50.5T457-430ZM100-120q-24 0-42-18t-18-42v-570h60v570h730v60H100Zm120-120q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h260l60 60h320q24 0 42 18t18 42v460q0 24-18 42t-42 18H220Zm0-60h640v-460H515l-60-60H220v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSmbShare;
