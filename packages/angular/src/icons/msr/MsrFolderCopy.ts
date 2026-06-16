import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-folder-copy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFolderCopy {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M100-120q-24.75 0-42.37-17.62T40-180v-530q0-12.75 8.68-21.37Q57.35-740 70.18-740 83-740 91.5-731.37T100-710v530h710q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T810-120H100Zm120-120q-24.75 0-42.37-17.62T160-300v-520q0-24.75 17.63-42.37T220-880h215q12.44 0 23.72 5T478-862l62 62h320q24.75 0 42.38 17.63T920-740v440q0 24.75-17.62 42.38T860-240H220Zm0-60h640v-440H515l-80-80H220v520Zm0 0v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFolderCopy;
