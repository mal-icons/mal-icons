import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-sos",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSos {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M400-280q-24.75 0-42.37-17.62T340-340v-280q0-24.75 17.63-42.37T400-680h160q24.75 0 42.38 17.63T620-620v280q0 24.75-17.62 42.38T560-280H400Zm-180 0H70q-12.75 0-21.37-8.68Q40-297.35 40-310.17 40-323 48.63-331.5T70-340h150v-110H100q-24.75 0-42.37-17.62T40-510v-110q0-24.75 17.63-42.37T100-680h150q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T250-620H100v110h120q24.75 0 42.38 17.63T280-450v110q0 24.75-17.62 42.38T220-280Zm640 0H710q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T710-340h150v-110H740q-24.75 0-42.37-17.62T680-510v-110q0-24.75 17.63-42.37T740-680h150q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T890-620H740v110h120q24.75 0 42.38 17.63T920-450v110q0 24.75-17.62 42.38T860-280Zm-460-60h160v-280H400v280Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSos;
