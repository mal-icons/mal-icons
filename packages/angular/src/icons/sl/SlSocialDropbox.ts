import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-social-dropbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlSocialDropbox {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1023.42 224.75a32.05 32.05 0 0 0-14.98-24.91L723.26 21.87c-11.6-7.22-26.43-6.32-37.05 2.29L511.98 165.1 337.79 24.16c-10.59-8.56-25.54-9.53-37.06-2.29L15.55 199.84A32.05 32.05 0 0 0 0.57 224.75c-0.75 10.22 3.47 20.16 11.31 26.75L177.1 390.32 35.56 501.5c-8.1 6.32-12.62 16.18-12.22 26.42s5.68 19.66 14.23 25.36l130.98 87.31c-6.43 5.84-10.54 14.21-10.54 23.6v128.34c0 11.12 5.78 21.44 15.25 27.28l321.97 182.43c5.12 3.15 10.94 4.72 16.75 4.72s11.63-1.6 16.78-4.75l318.22-182.43a32.01 32.01 0 0 0 15.22-27.25V642c0-2.06-0.24-4.08-0.61-6.03l124.05-82.69a31.97 31.97 0 0 0 14.22-25.33c0.4-10.26-4.09-20.08-12.16-26.42L846.78 390.38l165.31-138.88c7.86-6.59 12.08-16.53 11.33-26.75zM736.67 390.65L511.99 531.44 287.3 390.65 511.99 244.43zM86.8 230.85L315.27 88.26l142.37 115.18-227.34 147.97zm143.12 199.38l225.97 141.6-128.06 98.03-218-145.31zm-7.9 246l89.34 59.57c11.34 7.57 26.32 7.06 37.18-1.22l129.41-99.04v282.8l-255.94-143.68v-98.43zm576.19 98.43L541.95 920.34V632.56l132.66 101.97c5.71 4.4 12.62 6.62 19.5 6.62a31.81 31.81 0 0 0 17.74-5.38l86.34-57.57v96.45h0.02zm115.25-250.17L695.43 669.81l-127.44-97.94 226-141.63zM793.67 351.41L566.32 203.44l142.4-115.18 228.46 142.59z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlSocialDropbox;
